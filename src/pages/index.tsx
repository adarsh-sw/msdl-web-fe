import React from 'react';

import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import hasuras from '@site/static/img/msdl-docs-image.png';
import VersionedLink from '@site/src/components/VersionedLink';
import styles from './index.module.scss';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div style={{ display: `flex`, flexDirection: `column`, placeItems: `center` }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={styles.links}>
          <VersionedLink className="button button--primary button--lg" to="/index">
            MSDL Docs
          </VersionedLink>
        </div>
        <img src={hasuras} alt="Hasuras Image" />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Mekong School Digital Library is an online library of documents and media on the natural resources, environment, and culture in and around the Mekong River Basin."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
