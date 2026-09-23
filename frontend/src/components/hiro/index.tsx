import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { App as AntdApp,Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const welcomeLines = [
  "I turn complex ideas into clear, reliable, and elegant digital products.",
  "This portfolio shows how I think, how I build, and how I choose the right technology for each challenge.",
];

const introLines = [
  "My name is Ali yousefi, a software developer based in Iran.",
  "I work with modern web technologies, APIs, databases, and application architecture to build products that feel complete.",
  "I care about software that is fast, reliable, readable, accessible, and easy for real people to use.",
];

const valueLines = [
  "I can build responsive websites, dashboards, admin tools, API-powered features, data-driven systems, and polished product experiences.",
  "My approach is simple: understand the goal, choose the right technology, build the core experience, then refine every important detail.",
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Databases",
  "Next js",
  "Application logic",
  "Animation",
];

// const projects = [
//   {
//     title: "<Project name 01>",
//     type: "Web Application",
//     description:
//       "A polished product experience with clear navigation, responsive layouts, and smooth user interactions.",
//   },
//   {
//     title: "<Project name 02>",
//     type: "API-Powered Feature",
//     description:
//       "A practical service or API built around validation, reliable data flow, and maintainable business logic.",
//   },
//   {
//     title: "<Project name 03>",
//     type: "Product System",
//     description:
//       "A connected product flow that combines interface craft, API integration, validation, and data-driven content management.",
//   },
// ];

const processItems = [
  "Clarify the goal and the audience before writing code.",
  "Build the main workflow first, then improve edge cases and visual polish.",
  "Keep components readable, reusable, and easy to connect to real services.",
  "Test across screen sizes so the experience stays stable on desktop and mobile.",
];

interface IProject {
  title: string;
  description: string;
  tags: { name: string }[];
  url: string;
}

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

export function Hiro() {
  const pageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false);
  const { notification } = AntdApp.useApp();


  useEffect(() => {
    const init = async () => {
      await fetch(`${API_URL}/projects`)
        .then((res) => res.json())
        .then((data) => setProjects(data.results.projects));
    };
    init();
  }, []);

  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video) return;

      gsap.set(".section__stages", { yPercent: 100 });
      gsap.set(".section--second", { xPercent: -100 });
      gsap.set(".section--third", { xPercent: 100 });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 8}`,
          scrub: 1,
          pin: true,
        },
      });

      const buildTimeline = () => {
        timeline.to({}, { duration: 1.1 });

        timeline.to(".opening-panel", {
          yPercent: -100,
          duration: 1.2,
        });

        timeline.from(".welcome__text h1", {
          autoAlpha: 0,
          y: 16,
          duration: 0.8,
        });

        timeline.from(".welcome__text .line", {
          autoAlpha: 0,
          y: 12,
          duration: 0.6,
          stagger: 0.2,
        });

        timeline.to({}, { duration: 0.6 });

        timeline.to(".welcome", {
          autoAlpha: 0,
          duration: 0.6,
          scale: 1.06,
        });

        timeline.add("welcomeEnd");

        timeline.to(
          video,
          {
            currentTime: video.duration || 1,
            ease: "none",
            duration: 16,
          },
          "welcomeEnd",
        );

        timeline.from(
          ".hiro__description--first",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.7,
          },
          "welcomeEnd+=0.2",
        );

        timeline.from(
          ".hiro__description--first .line",
          {
            autoAlpha: 0,
            y: 10,
            duration: 0.25,
            stagger: 0.35,
          },
          ">+=0.4",
        );

        timeline.to(
          ".hiro__description--first",
          {
            y: -24,
            autoAlpha: 0,
            duration: 0.6,
          },
          ">+=4",
        );

        timeline.from(
          ".hiro__description--second",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.7,
          },
          ">+=2",
        );

        timeline.from(
          ".hiro__description--second .line",
          {
            autoAlpha: 0,
            y: 10,
            duration: 0.25,
            stagger: 0.35,
          },
          ">+=0.4",
        );
        timeline.to(
          ".hiro__description--second",
          {
            y: -24,
            autoAlpha: 0,
            duration: 0.6,
          },
          ">+=2",
        );

        timeline.to(
          ".section__stages",
          {
            yPercent: 0,
            duration: 2.2,
          },
          "-=2",
        );

        timeline.to({}, { duration: 1 });
        timeline.to(".section--first .stage-content > *", {
          autoAlpha: 0,
          y: -18,
          duration: 0.4,
        });

        timeline.to(".section--second", {
          xPercent: 0,
          duration: 2.2,
        });

        timeline.from(".section--second .stage-content > *", {
          autoAlpha: 0,
          y: 18,
          duration: 0.4,
          stagger: 0.08,
        });
        timeline.to({}, { duration: 1 });
        timeline.to(".section--second .stage-content > *", {
          autoAlpha: 0,
          y: -18,
          duration: 0.4,
        });

        timeline.to(".section--third", {
          xPercent: 0,
          duration: 2.2,
        });

        timeline.from(".section--third .stage-content > *", {
          autoAlpha: 0,
          y: 18,
          duration: 0.4,
          stagger: 0.08,
        });

        timeline.to({}, { duration: 1.2 });
      };

      if (video.readyState >= 1) {
        buildTimeline();
      } else {
        video.addEventListener("loadedmetadata", buildTimeline, { once: true });
      }

      return () => {
        video.removeEventListener("loadedmetadata", buildTimeline);
      };
    },
    {
      dependencies: [],
      scope: pageRef,
    },
  );

  const onFinish = (payload:{name:string,email:string,message:string})=>{
    console.log('payload',payload);
    setLoading(true);
    fetch(`${API_URL}/collabration`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('data',data);
      if(data.success){
        notification.success({message:data.message})
        form.resetFields();
      }else{
        notification.error({message:data.message})

      }
    })
    .catch(err=>{
      notification.error({message:"something went wrong"})

    })
    .finally(()=>{      
      setLoading(false);
    })
    
  }
  return (
    <section className="portfolio-story" id="home">
      <div className="container" ref={pageRef}>
        <section className="panel opening-panel">
          <div className="stage-content">
            <p className="intro-text">Welcome</p>
            <h2>Thank you for visiting my website.</h2>
            <p>
              I appreciate your time and attention. Take a moment to explore my
              work, my technology choices, and the way I turn ideas into useful
              digital products.
            </p>
          </div>
        </section>

        <div className="welcome">
          <div className="welcome__text">
            <p className="intro-text">Portfolio of Ali yousefi</p>
            <h1 className="--primary">
              Software developer crafting powerful products with the right
              technology.
            </h1>
            {welcomeLines.map((line, index) => (
              <p key={index} className="line">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="hiro">
          <div className="hiro__overlay" />
          <div className="hiro__content">
            <div className="scroll-video" aria-hidden="true">
              <video
                ref={videoRef}
                src="/videos/hero.mp4"
                muted
                playsInline
                preload="auto"
              />
            </div>

            <article
              className="hiro__description hiro__description--first"
              id="about"
            >
              <p className="intro-text">About Me</p>
              <h2 className="hiro__description__header --primary">
                Hi, I am Ali.
              </h2>
              <div className="hiro__description__body">
                {introLines.map((line, index) => (
                  <p key={index} className="line">
                    {line}
                  </p>
                ))}
              </div>
            </article>

            <article className="hiro__description hiro__description--second">
              <p className="intro-text">What I Do</p>
              <h2 className="hiro__description__header --primary">
                I turn ideas into software people can trust.
              </h2>
              <div className="hiro__description__body">
                {valueLines.map((line, index) => (
                  <p key={index} className="line">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="section__stages">
          <section className="panel section--first" id="skills">
            <div className="stage-content">
              <p className="intro-text">Skills</p>
              <h2>Tools I use to build strong digital products.</h2>
              <p>
                My strongest area is frontend, with a growing focus on backend.
                I like clean architecture, readable code, practical user flows,
                and systems that are easy to maintain.
              </p>
              <div className="skill-list" aria-label="Skills">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="panel section--second" id="projects">
            <div className="stage-content">
              <p className="intro-text">Selected Work</p>
              <h2>Projects that show how I think and build.</h2>
              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <p>{project.tags[0]?.name}</p>
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                    <div>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.url}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              <div className="process">
                <h3>How I Work</h3>
                {processItems.map((item, index) => (
                  <p key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="panel section--third" id="contact">
            <div className="stage-content contact-stage">
              <p className="intro-text">Contact Me</p>
              <h2>Have a project, role, or collaboration in mind?</h2>
              <p>
                Send me a message at{" "}
                <a href="mailto:ali.ys.654.81@gmail.com">
                  ali.ys.654.81@gmail.com;
                </a>
                , or use the form below.
              </p>

              <div className="contact-grid">
                <Form autoComplete="off" className="contact-form" layout="vertical" form={form} onFinish={onFinish}>
                  <Form.Item name={"name"} label={"Name"} rules={[{ required: true,message:"Please input name" }]}>
                    <Input placeholder="Your name" />
                  </Form.Item>
                  <Form.Item name={"email"} label={"Email"} rules={[{ required: true,message:"Please input email" }]}>
                    <Input placeholder="Your email"  />
                  </Form.Item>
                  <Form.Item name={"message"} label={"Message"} rules={[{ required: true,message:"Please input message" }]}>
                    <TextArea rows={6} placeholder="Tell me about your collaboration request..." maxLength={500} />
                  </Form.Item>
                  <Button htmlType="submit" loading={loading} disabled={loading}>Submit</Button>
                </Form>

                {/* <div className="chat-preview" aria-label="Chat preview">
                  <div className="chat-header">
                    <span />
                    <div>
                      <h3>Ali yousefi</h3>
                      <p>Usually replies in &lt;response time&gt;</p>
                    </div>
                  </div>
                  <div className="chat-bubble incoming">
                    Hi, I would like to talk about a new project.
                  </div>
                  <div className="chat-bubble outgoing">
                    Thanks for reaching out. Share the goal, timeline, and any
                    references you already have.
                  </div>
                  <div className="chat-input">
                    <span>Write a message...</span>
                    <button type="button">Send</button>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
