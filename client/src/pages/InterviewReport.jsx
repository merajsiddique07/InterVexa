import { useEffect, useState } from "react";
import { ServerUrl } from "../App";
import axios from "axios";
import { useParams } from "react-router-dom";
import Step3Report from "../components/Step3Report";

const InterviewReport = () => {
  const [report, setReport] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/interview/report/" + id,
          { withCredentials: true },
        );
        setReport(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReport();
  }, []);
  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading Report...</p>
      </div>
    );
  }
  return <Step3Report report={report} />;
};

export default InterviewReport;
