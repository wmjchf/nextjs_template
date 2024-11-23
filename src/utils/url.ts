import { DEFAULT_AVATAR } from "@/constant";

export const searchPath = (path: string) => {
  const search = location.search;
};

export const getAvatarUrl = (url?:string)=>{
  if(!url){
    return DEFAULT_AVATAR
  }
  const regex = /^(https?:\/\/[\w.-]+\/)([\w\/.-]+\/)?([\w-]+\.[\w]+)$/;
  return regex.test(url)?url:DEFAULT_AVATAR;
}