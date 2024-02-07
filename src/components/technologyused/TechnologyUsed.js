// TechnologyUsed.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TechnologyUsed.module.css";
import Link from "next/link";

const TechnologyUsed = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center mb-4">Technology Used</h2>
        <p>
          Crafting Tomorrow with Today's Innovation: Elevate Your Experience
          Through the Power of Technology. 🚀✨ Now, let's explore the tech
          behind the magic with CloudProAI
        </p>
        <div className={styles.scrollableContainer}>
          <Row className="mb-4">
            {/* Box 1 */}
            <Col md={4} className="mb-3">
              <div className={`${styles["tech-card"]} bg-light border p-3`}>
                <h4>ETL/Data Integrator</h4>
                <div className={`${styles["logo-container"]}`}>
                  <Link href={"https://www.fivetran.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/etldataintegrator/fivetran.png"
                      alt="Fivetran Logo"
                    />
                  </Link>
                  <Link href={"https://www.databricks.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/etldataintegrator/databricks.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://hightouch.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/etldataintegrator/hightouch.png"
                      alt="Hightouch Logo"
                    />
                  </Link>
                  <Link href={"https://www.getdbt.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/etldataintegrator/databuildtool.png"
                      alt="DBT Logo"
                    />
                  </Link>
                  <Link
                    href={"https://www.data-vault.co.uk/what-is-data-vault/"} target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/technology/etldataintegrator/datavault.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                </div>
              </div>
            </Col>

            {/* Box 2 */}
            <Col md={4} className="mb-3">
              <div className={`${styles["tech-card"]} bg-light border p-3`}>
                <h4>Web Application Development</h4>
                <div className={`${styles["logo-container"]}`}>
                  <Link href={"https://angular.io/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/angular.png"
                      alt="Fivetran Logo"
                    />
                  </Link>
                  <Link href={"https://expressjs.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/express.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://nativejs.dev/"}target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/native.png"
                      alt="Hightouch Logo"
                    />
                  </Link>
                  <Link href={"https://nodejs.org/en"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/node.png"
                      alt="DBT Logo"
                    />
                  </Link>
                  <Link href={"https://react.dev/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/react.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                  <Link href={"https://rubyonrails.org/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/rubyonrails.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                  <Link href={"https://vuejs.org/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/webdevelopment/vue.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                  <Link
                    href={
                      "https://wordpress.com/?aff=15767&cid=1654213&cmp_id=11549382845&adg_id=111353876614&kwd=wordpress&device=c&gad_source=1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1BkDnT-7vhTQEQELOs_Kx3Z_PHCvAy-jUuTWJl9VaRWZJHliMs0yBRoCjvUQAvD_BwE"
                    } target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/technology/webdevelopment/wordpress.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                </div>
              </div>
            </Col>

            {/* Box 3 */}
            <Col md={4} className="mb-3">
              <div className={`${styles["tech-card"]} bg-light border p-3`}>
                <h4>Database Management</h4>
                <div className={`${styles["logo-container"]}`}>
                  <Link href={"https://cassandra.apache.org/_/index.html"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/cassandra.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://www.mongodb.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/mongodb.png"
                      alt="Fivetran Logo"
                    />
                  </Link>
                  <Link href={"https://www.microsoft.com/en-us/sql-server/sql-server-2022"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/mssqlserver.png"
                      alt="Hightouch Logo"
                    />
                  </Link>
                  <Link href={"https://www.mysql.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/mysql.png"
                      alt="DBT Logo"
                    />
                  </Link>
                  <Link href={"https://www.oracle.com/database/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/oracle.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                  <Link href={"https://www.postgresql.org/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/postgresql.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                  <Link href={"https://www.snowflake.com/en/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/dbmanagement/snowflake.png"
                      alt="Data Vault Logo"
                    />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            {/* Box 1 */}
            <Col md={4} className="mb-3">
              <div className={`${styles["tech-card"]} bg-light border p-3`}>
                <h4>DevOps</h4>
                <div className={`${styles["logo-container"]}`}>
                  <Link href={"https://www.ansible.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/devops/ansible.png"
                      alt="Fivetran Logo"
                    />
                  </Link>
                  <Link href={"https://docs.gitlab.com/ee/ci/pipelines/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/devops/gitlab.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://www.jenkins.io/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/devops/jenkins.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://kubernetes.io/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/devops/kubernetes.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://www.terraform.io/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/devops/terraform.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                </div>
              </div>
            </Col>

            {/* Box 2 */}
            <Col md={4} className="mb-3">
              <div className={`${styles["tech-card"]} bg-light border p-3`}>
                <h4>Monitoring Tools</h4>
                <div className={`${styles["logo-container"]}`}>
                  <Link href={"https://www.datadoghq.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/monitoringtools/datadog.png"
                      alt="Fivetran Logo"
                    />
                  </Link>
                  <Link href={"https://grafana.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/monitoringtools/grafana.png"
                      alt="Databricks Logo"
                    />
                  </Link>
                  <Link href={"https://newrelic.com/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/monitoringtools/newrelic.png"
                      alt="Hightouch Logo"
                    />
                  </Link>
                  <Link href={"https://prometheus.io/"} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/technology/monitoringtools/prometheus.png"
                      alt="DBT Logo"
                    />
                  </Link>
                </div>
              </div>
            </Col>

            {/* Box 3 */}
            <Col md={4} className="mb-3">
              <div className={`${styles["tech-card"]} bg-light border p-3`}>
                <h4>Cloud Platform</h4>
                <div className={`${styles["logo-container"]}`}>
                <Link href={"https://aws.amazon.com/?nc2=h_lg"} target="_blank" rel="noopener noreferrer">

                  <img
                    src="/assets/images/technology/cloudplatform/aws.png"
                    alt="Fivetran Logo"
                  />
                  </Link>
                  <Link href={"https://azure.microsoft.com/en-us"} target="_blank" rel="noopener noreferrer">

                  <img
                    src="/assets/images/technology/cloudplatform/azure.png"
                    alt="Databricks Logo"
                  />
                  </Link>
                  <Link href={"https://cloud.google.com/"} target="_blank" rel="noopener noreferrer">

                  <img
                    src="/assets/images/technology/cloudplatform/gcp.png"
                    alt="Hightouch Logo"
                  />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          
        </div>
      </Container>
    </div>
  );
};

export default TechnologyUsed;
