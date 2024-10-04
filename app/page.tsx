import Image from "next/image";
import Wrapper from "@/components/wrapper/wrapper";
import { Title } from "@/components/title/title";
import Panel from "@/components/panel/panel";
import Avatar from "@/components/avatar/avatar";
import { Expandable } from "@/components/expandable/expandable";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Sven Aarts | Frontend Web Developer Specializing in Rich, Responsive, and Robust User Interfaces",
  description:
    "Experienced frontend web developer specializing in creating rich, responsive, and robust user interfaces. Expertise in CSS, JavaScript, React, Vue, and performance optimization, ensuring accessible, SEO-friendly, and high-performance web applications.",
};

export default function Home() {
  return (
    <main>
      <Panel>
        <Wrapper size="medium">
          <Avatar src="/avatar.webp" alt="Sven Aarts" />

          <Title level="h1" size="large">
            <strong>Sven Aarts</strong> - Web developer
          </Title>

          <Title level="h2" size="small">
            Hi, I'm Sven Aarts, a passionate web developer specializing in creating <strong>rich</strong>, <strong>responsive</strong>, and{" "}
            <strong>robust user interfaces</strong>.
          </Title>

          <Expandable id="about" labelWhenOpened="Less is more" labelWhenClosed="More about me">
            <p>
              Throughout my career, I've honed my expertise in integrating frontend solutions with various CMS platforms, ensuring seamless performance across
              different content management systems. My skill set includes HTML, CSS, JavaScript (and TypeScript), along with modern frontend libraries like Vue
              and React. I’m passionate about creating intuitive, high-performance user experiences and building robust web applications.
            </p>

            <p>
              I prioritize best practices in SEO, accessibility, and performance optimization, while my component-driven approach ensures that every project is
              built with maintainable, scalable, and reusable code. This method promotes adaptability and speeds up development without compromising on quality
              or consistency.
            </p>

            <p>
              Collaboration is key to successful projects, and I thrive in environments where I can work alongside cross-functional teams, including designers,
              backend developers, and stakeholders, to bring digital experiences to life.
            </p>
          </Expandable>
        </Wrapper>
      </Panel>
    </main>
  );
}
