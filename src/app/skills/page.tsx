import {
  Heading,
  Text,
  Column,
  Row,
  Schema,
  Meta,
  Media,
  Tag,
} from "@once-ui-system/core";
import { skills, person, baseURL } from "@/resources";
import React from "react";
import TableOfContents from "@/components/about/TableOfContents";
import { SmartLink } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL: baseURL,
    path: skills.path,
  });
}

export default function SkillsPage() {
  const structure = [
    {
      title: "Learning Badges",
      display: true,
      items: []
    },
    {
      title: "Involvements",
      display: true,
      items: []
    },
    {
      title: "Technical Skills",
      display: true,
      items: []
    },
  ];
  return (
    <Column maxWidth="m" fillWidth gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={skills.path}
        title={skills.title}
        description={skills.description}
        author={{
          name: person.name,
          url: `${baseURL}${skills.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Navigation */}
      <Column
        left="0"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        position="fixed"
        paddingLeft="24"
        gap="32"
        s={{ hide: true }}
      >
        <TableOfContents 
          structure={structure} 
          about={{ tableOfContent: { display: true, subItems: false } }} 
        />
      </Column>

      {/* Certifications Section */}
      <Column id="Learning Badges" fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Learning Badges
        </Heading>
        <div className="cert-showcase">
          {skills.certifications.map((cert, index) => {
            const isReverse = index % 2 === 1; // Alternates layout (Card 1: Image Left, Card 2: Image Right)
            return (
              <div
                key={index}
                className={`cert-horizontal-card ${isReverse ? "reverse" : ""}`}
              >
                <div className="cert-image-container">
<Media
  alt={cert.title || cert.name}
  src={cert.image}
  style={{
    objectFit: "cover", // 👈 Fills 100% of the container with no empty space
    width: "100%",
    height: "100%",
    minHeight: "180px",
  }}
/>
                </div>
                <div className="cert-info-container">
                  <Row gap="8" vertical="center" wrap>
                    <Tag size="s" variant="neutral">
                      {cert.name}
                    </Tag>
                    {cert.tag && (
                      <Tag size="s" variant="brand">
                        {cert.tag}
                      </Tag>
                    )}
                  </Row>
                  <Text variant="heading-strong-m">
                    {cert.title || cert.name}
                  </Text>
                  {cert.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {cert.description}
                    </Text>
                  )}
                  <Row paddingTop="8">
                    <SmartLink
                      suffixIcon="arrowUpRightFromSquare"
                      href={cert.link}
                      target="_blank"
                    >
                      <Text variant="body-default-s">
                        {cert.name === "Microsoft Learn"
                          ? "View Official Transcript"
                          : "View Public Skills Profile"}
                      </Text>
                    </SmartLink>
                  </Row>
                </div>
              </div>
            );
          })}
        </div>
      </Column>

      {/* Engagements Section */}
      <Column id="Involvements" fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Involvements
        </Heading>
        <div className="cert-showcase">
          {skills.engagements.map((item, index) => {
            const isReverse = index % 2 === 1; // Alternates layout (Card 1: Image Left, Card 2: Image Right)
            return (
              <div
                key={index}
                className={`cert-horizontal-card ${isReverse ? "reverse" : ""}`}
              >
                <div className="cert-image-container">
                  <Media
                    radius="m"
                    alt={item.title || item.name}
                    src={item.image}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      minHeight: "180px",
                    }}
                  />
                </div>
                <div className="cert-info-container">
                  <Row gap="8" vertical="center" wrap>
                    <Tag size="s" variant="neutral">
                      {item.name}
                    </Tag>
                    {item.tag && (
                      <Tag size="s" variant="brand">
                        {item.tag}
                      </Tag>
                    )}
                  </Row>
                  <Text variant="heading-strong-m">
                    {item.title || item.name}
                  </Text>
                  {item.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  )}
                  {item.link && (
                    <Row paddingTop="8">
                      <SmartLink
                        suffixIcon="arrowUpRightFromSquare"
                        href={item.link}
                        target="_blank"
                      >
                        <Text variant="body-default-s">View credential</Text>
                      </SmartLink>
                    </Row>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Column>

      {/* Learning & Skills Section */}
      <Column id="Technical Skills" fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Technical Skills
        </Heading>
        <div className="skills-grid">
          {skills.learning.map((category, index) => (
            <Column key={index} gap="m" className="skill-card">
              <Text variant="heading-strong-s">{category.category}</Text>
              <Row wrap gap="8">
                {category.skills.map((skill, skillIndex) => (
                  <Tag key={skillIndex} size="l">
                    {skill}
                  </Tag>
                ))}
              </Row>
            </Column>
          ))}
        </div>
      </Column>
    </Column>
  );
}