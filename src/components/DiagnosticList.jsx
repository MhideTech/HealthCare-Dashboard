import styles from "./DiagnosticList.module.css";

function DiagnosticList() {
  return (
    <section className={styles.diagnosticList}>
      <h1>Diagnostic List</h1>
      <div className={styles.listContainer}>
        <table>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>Chronic high blood pressure</td>
              <td>Under Observation</td>
            </tr>
            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance and elevated blood sugar</td>
              <td>Cured</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DiagnosticList;
