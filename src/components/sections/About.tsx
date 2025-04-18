
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              At Sharkedge Media, we believe in using technology to simplify growth. We're a team of digital strategists, developers, and creative minds building smart solutions for businesses around the world.
            </p>
            <p className="text-lg text-gray-700">
              From automating ad campaigns to creating powerful Meta API tools, we help you scale efficiently and intelligently.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
