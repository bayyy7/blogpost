import { CONFIG } from "site.config";
import React from "react";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import styled from "@emotion/styled";

const CareerPortfolio: React.FC = () => {
  if (!CONFIG.projects) return null;

  return (
    <>
      <StyledTitle>Career Journey</StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <StyledCard key={idx}>
            <AiFillCodeSandboxCircle className="icon" />
            <div className="details">
              <div className="title">{project.title}</div>
              <div className="time">{project.year}</div>
              <a
                href={project.href}
                rel="noreferrer"
                target="_blank"
                className="company"
              >
                {project.company}
              </a>
            </div>
          </StyledCard>
        ))}
      </StyledWrapper>
    </>
  );
};

export default CareerPortfolio;

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
`;

const StyledCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  gap: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray11};

  :hover {
    background-color: ${({ theme }) => theme.colors.gray5};
  }

  .icon {
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.gray10};
  }

  .details {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .time {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray9};
    margin-bottom: 0.5rem;
  }

  .company {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.blue11};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
