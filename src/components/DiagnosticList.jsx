/* eslint-disable react/prop-types */
import styles from "./DiagnosticList.module.css";

function DiagnosticList({ selectedPatient }) {
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
            {selectedPatient?.diagnostic_list?.map((list) => (
              <tr key={Math.random()}>
                <td>{list.name}</td>
                <td>{list.description}</td>
                <td>{list.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DiagnosticList;
