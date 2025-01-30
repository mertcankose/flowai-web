import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FC } from "react";

interface IFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<IFeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-white border-primary/10 hover:bg-primary/5 transition-all">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
