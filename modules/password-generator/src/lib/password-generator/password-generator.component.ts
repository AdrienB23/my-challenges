import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PasswordService } from '../../../../../libs/shared/services/password.service';
import { switchMap } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Password } from '../../../../../libs/shared/models/password';

@Component({
  selector: 'lib-password-generator',
  standalone: false,
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent implements OnInit {
  passwordText!: Password;
  language!: string;
  password = "";
  copySuccess = false;
  copyHover = false;
  generateHover = false;
  passwordLength = 0;
  charTypes = [
    {key: "ul", name: "Lettres Majuscules", value: false},
    {key: "ll", name: "Lettres Minuscules", value: false},
    {key: "n", name: "Nombres", value: false},
    {key: "s", name: "Symboles", value: false}
  ];
  strength = 0;
  screenWidth!: number;

  constructor(
    private passwordService: PasswordService,
    private route: ActivatedRoute
  ) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.language = params.get('language')!
        )
      )
      .subscribe(() => {
        this.passwordText = this.passwordService.getTrad(this.language);
        console.log(this.passwordText);
      });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  copyToClipboard() {
    if (this.password !== '') {
      navigator.clipboard.writeText(this.password).then(() => {
        this.copySuccess = true;
        setTimeout(() => this.copySuccess = false, 2000);
      }).catch(err => console.error(this.passwordText.error + ' : ', err));
    }
  }

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';

    console.log(this.charTypes);

    if (this.charTypes[0].value) characterPool += uppercaseChars;
    if (this.charTypes[1].value) characterPool += lowercaseChars;
    if (this.charTypes[2].value) characterPool += numberChars;
    if (this.charTypes[3].value) characterPool += symbolChars;

    if (characterPool.length === 0) {
      this.password = '';
      return;
    }

    this.password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      this.password += characterPool[randomIndex];
    }
    this.strength = this.getPasswordStrength();
  }

  getPasswordStrength() {
    const length = this.password.length;
    let score = 0;

    // Vérifier la présence de différents types de caractères
    if (/[a-z]/.test(this.password)) score++;
    if (/[A-Z]/.test(this.password)) score++;
    if (/\d/.test(this.password)) score++;
    if (/[\W_]/.test(this.password)) score++;

    if (score === 0) return 0;
    if (length < 6) return 1;
    if (length < 8) return score < 3 ? score : score - 1;
    if (length < 10) return score < 3 ? 2 : 3;
    return score < 3 ? 3 : 4;
  }

  protected readonly Array = Array;
}