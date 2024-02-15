export interface UserDTO { //default
  user: {
    _id: string;
    name: string;
    surname: string;
    cf: string;
    email: string;
    email_alexa: string
    phone: string;
    user_type: string;
    new_user: boolean;
    endpoint: string;
    expirationTime: number;
    key_p256dh: string;
    key_auth: string
  };
  /**@deprecated*/
  access_token: string;
}

export interface UserUpdateDTO {
  email?: string;
  email_alexa?: string;
  phone?: string;
  user_type?: string;
  endpoint?: string;
  expirationTime?: number;
  key_p256dh?: string;
  key_auth?: string
}

export interface UserCreateDTO {
  user: {
    name?: string;
    surname?: string;
    cf?: string;
    email?: string;
    email_alexa?: string;
    phone?: string;
    endpoint?: string;
    expirationTime?: number;
    key_p256dh?: string;
    key_auth?: string
  };
  username: string;
  patient: {
    sex?: string;
    dob?: Date;
    residence?: string;
  };
}

export interface UserAnonymousDTO {
  id: string;
  username: string;
  user_type: string;
}

export interface CreateDoctorDto {
  user: {
    name: string;
    surname?: string;
    credentials_id?: string;
    cf?: string;
    email: string;
    user_type?: string;
    phone?: string;
  };
  username: string;
  doctor: {
    user_id?: string;
  };
}

export interface DoctorDto {
  _id: string
  user_id: string
}
