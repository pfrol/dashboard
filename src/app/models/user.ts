/**
 * @file
 * A user logged into the application.
 */
export class User {
  uid: string;
  nom: string;
  mail: string;
  photo: string;
  active: boolean;
  locale: string;

  constructor(options: {
    uid: string;
    nom: string;
    mail: string;
    photo?: string;
    active?: boolean;
    locale?: string
  }) {
    this.uid = options.uid;
    this.nom = options.nom;
    this.mail = options.mail;
    this.photo = options.photo || '';
    this.active = options.active === undefined ? true : options.active;
    this.locale = options.locale;

  }

  /**
   * Return a JSON representation of the quiz
   * which is compatible with our backend.
   */
  toJson() {
    return {
      id: this.uid,
      nom: this.nom,
      mail: this.mail,
      active: this.active,
      locale: this.locale
    };
  }
}
