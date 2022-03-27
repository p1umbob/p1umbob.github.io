import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../layout/layout";

const Contact: any = ({ allPosts }: any) => {
  return (
    <Layout>
      <section className="my-5">
        <p>
          Github: <a href={"https://github.com/pzij"}>Johan Pan</a>
        </p>
      </section>
    </Layout>
  );
};

export default Contact;