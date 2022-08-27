export interface EmailAuth {
  execute: (data: EmailAuth.Params) => Promise<boolean>;
}

export namespace EmailAuth {
  export type Params = {
    body: {
      email: string;
      password: string;
      stayLogged: boolean;
      captchaResponse: string;
    };
  };
}
