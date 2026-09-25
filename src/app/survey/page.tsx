import type { Metadata } from "next";
import { Survey } from "@/components/survey/Survey";

export const metadata: Metadata = { title: "Survey — IvyUp" };

export default function SurveyPage() {
  return <Survey />;
}
