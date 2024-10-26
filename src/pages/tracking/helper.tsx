import axios from "axios";
import { toast } from "react-toastify";

export const getTrackingEvent = async (deliveryNo: string) => {
  try {
    const response = await axios.post(
      "https://courierdirect.couriermate.co.za/api/json",
      {
        username: "CDLIVE",
        password: "CWMt29JmNfd6",
        method: "get_tracking_events",
        delivery_no: deliveryNo,
      }
    );
    if (response?.data?.response_code === -1) {
      toast.error(response?.data?.response_message);
      return;
    }
    if (response?.data?.record_count >= 1) {
      toast.success(response?.data?.response_message);
      return response?.data?.records;
    }

    throw new Error(`Failed with status ${response.status}`);
  } catch (error) {
    throw error;
  }
};
