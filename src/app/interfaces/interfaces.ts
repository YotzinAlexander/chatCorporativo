/** INTERFACES DE TRANSFERENCIA DE DATOS */
export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  avatar: string;
  grupos: Grupo[];
  _id: string;
  nombre: string;
  email: string;
  password: string;
  corporacion: string;
  enabled: boolean;
}


export interface Grupo {
  img: string;
  _id: string;
  nombre: string;
  enabled: boolean;
}


export interface Mensaje {
  img: string[];
  doc: string[];
  eliminar: boolean;
  _id: string;
  texto: string;
  usuario: Usuario;
  grupo: Grupo;
  created: Date;
  reenviar: string;
}


