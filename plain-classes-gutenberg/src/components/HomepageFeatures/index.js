import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    buttonLink: '/docs/intro',
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    buttonLink: '/docs/category/basics',
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    buttonLink: '/docs/category/extras',
  },
  {
    title: 'Premium Plugins',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Discover our collection of premium WordPress plugins designed to enhance your development workflow.
      </>
    ),
    buttonLink: 'https://dplugins.com/downloads/',
  },
  {
    title: 'Gutenberg Blocks',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Free Gutenberg blocks to enhance your WordPress editor experience and create better content.
      </>
    ),
    buttonLink: 'https://wordpress.org/plugins/dblocks-youtube-lazyload/',
  },
  {
    title: 'Community Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Join our community of developers and get help, share ideas, and stay updated with the latest features.
      </>
    ),
    buttonLink: 'https://www.facebook.com/groups/dplugins',
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Comprehensive documentation to help you get the most out of our tools and plugins.
      </>
    ),
    buttonLink: '/docs/intro',
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Need help? Our support team is here to assist you with any questions or issues.
      </>
    ),
    buttonLink: 'https://support.dplugins.com/',
  },
];

function Feature({Svg, title, description, buttonText, buttonLink}) {
  return (
    <div className={clsx('col col--4 feature-card')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {buttonLink && (
          <div className={styles.buttonContainer}>
            <Link
              className="button"
              to={buttonLink}
            >
              {buttonText || 'Read More'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
