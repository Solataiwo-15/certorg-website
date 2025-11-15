import styles from "./Team.module.css";
import teamMale from "../assets/images/team-male.png";
import teamFemale from "../assets/images/team-female.png";

const Team = () => {
  return (
    <section id="testimonials" className={styles.teamSection}>
      <div className="container">
        <h2 className={styles.headline}>Meet the team</h2>
        <div className={styles.teamGrid}>
          {/* Team Member 1 */}
          <div className={styles.teamMember}>
            <img
              src={teamMale}
              alt="Okonkwo Charles"
              className={styles.memberPhoto}
            />
            <h3 className={styles.memberName}>Okonkwo Charles</h3>
            <p className={styles.memberTitle}>CEO/ Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className={styles.teamMember}>
            <img
              src={teamFemale}
              alt="Damola Samson"
              className={styles.memberPhoto}
            />
            <h3 className={styles.memberName}>Damola Samson</h3>
            <p className={styles.memberTitle}>COO/ Co-founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
