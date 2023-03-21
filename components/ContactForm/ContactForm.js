import styles from './ContactForm.module.scss';

export default function ContactForm() {
  return (
    <form name="contact" action="/contact-success" method="POST" data-netlify="true" className={styles.contactForm}>
      <input type="hidden" name="form-name" value="contact" />
      <div className={styles.formGroup}>
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
