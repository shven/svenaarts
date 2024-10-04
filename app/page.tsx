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
              I specialize in integrating frontend solutions with CMS platforms to deliver seamless, high-performance websites. With a solid background in{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                HTML
              </a>
              ,{" "}
              <a href="https://www.w3.org/TR/CSS2/" target="_blank">
                CSS
              </a>{" "}
              &{" "}
              <a href="https://www.typescriptlang.org/" target="_blank">
                Typescript
              </a>
              , and modern libraries like{" "}
              <a href="https://vuejs.org/" target="_blank">
                Vue
              </a>{" "}
              and{" "}
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>
              , I’m passionate about building intuitive user experiences and robust web applications.
            </p>

            <p>
              My focus is on best practices in <strong>SEO</strong>, <strong>accessibility</strong>, and <strong>performance optimization</strong>. I use a{" "}
              <strong>component-driven approach</strong> to create maintainable, scalable, and reusable code, ensuring projects are adaptable and developed
              efficiently without sacrificing quality.
            </p>

            <p>
              I excel in <strong>collaborative environments</strong>, working closely with UX/UI designers, developers, and stakeholders to bring engaging
              digital experiences to life.
            </p>
          </Expandable>
        </Wrapper>
      </Panel>
    </main>
  );
}
