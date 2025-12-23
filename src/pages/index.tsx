import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to Sum Buddy
        </Heading>
        <p className="hero__subtitle">The AI-Powered Spreadsheet</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://www.sumbuddy.net"
            style={{marginRight: '1rem'}}>
            Try Sum Buddy
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Natural Language Interface</h3>
              <p>
                Tell Sum Buddy what you want in plain English. No need to memorize
                complex formulas or navigate endless menus.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>AI-Powered</h3>
              <p>
                Powered by AI, Sum Buddy understands your intent and creates
                spreadsheets, formulas, and charts automatically.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Full Spreadsheet Functionality</h3>
              <p>
                40+ functions, charts, Excel import/export, and all the features you
                expect from a modern spreadsheet application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Documentation for Sum Buddy, the AI-powered spreadsheet">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
