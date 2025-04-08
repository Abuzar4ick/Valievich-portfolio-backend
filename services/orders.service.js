const { supabase } = require("../config/supabase");

exports.createOrder = async (formData) => {
  try {
    const { username, phone_number, organization, services, message } = formData;

    // Check user by phone_number
    const { data: existingRequest, error: findRequestError } = await supabase
      .from("requests")
      .select("*")
      .eq("phone_number", phone_number)
      .single();

    if (existingRequest) {
      return { success: false };
    }

    // Create a new request of user
    const { data: insertData, error: insertError } = await supabase
      .from("requests")
      .insert([{ username, phone_number, organization, services, message }]);

    if (insertError) throw new Error(insertError.message);

    return { success: true };
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw new Error(err.message);
  }
};

exports.getOrders = async () => {
  try {
    const { data, error } = await supabase.from("requests").select();

    if (error) {
      console.error(`Error: ${error.message}`);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw new Error(err.message);
  }
};

exports.getOrderByPhone = async (phone_number) => {
  try {
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .eq("phone_number", phone_number)
      .single();

    if (error) {
      console.error(`Error: ${error.message}`);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw new Error(err.message);
  }
};
