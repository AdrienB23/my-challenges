import { Component, OnInit } from '@angular/core';
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

  constructor(
    private passwordService: PasswordService,
    private route: ActivatedRoute
  ) {}

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


  protected readonly Array = Array;
}