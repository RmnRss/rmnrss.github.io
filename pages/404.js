import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ContentLayout from "../components/layouts/ContentLayout";
import SEO from "../components/seo";

const Content = styled(ContentLayout)`
  && {
    align-items: center;
    justify-content: center;

    height: 100vh;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  height: 224px;
  width: 224px;

  margin: 2rem;
`;

const Rect = styled(motion.div)`
  width: 100%;
  height: 100%;

  transition: background-color ease 0.2s;
`;

const Info = styled.p`
  margin: 0 0 2rem 0;
  text-align: center;
  color: ${(props) => props.theme.light};
`;

const NotFoundPage = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [hues, setHues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    function incrementHue() {
      let newHues = hues;
      newHues[activeIndex] = hues[activeIndex] + 60;
      setHues(newHues);
    }

    incrementHue();
  }, [activeIndex]);

  return (
    <>
      <SEO title="Page not found." />
      <Content>
        <Grid>
          {hues.map((hue, i) => (
            <Rect
              key={i}
              hue={hue}
              style={{ backgroundColor: `hsl(${hue}, 100%, 80%)` }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => {
                setActiveIndex(i);
              }}
            />
          ))}
        </Grid>
        <h1>404</h1>
        <h2>Page not found...</h2>
        <Info className={"centered-text"}>
          Weird... this page does not exist. You can go back to our homepage
          using the link below, or hover the cube above and have fun creating
          rainbows ?
        </Info>
        <Link passHref href={"/"}>
          <Button color={"primary"}>Home</Button>
        </Link>
      </Content>
    </>
  );
};

export default NotFoundPage;
