export const obscureEmail = (email: string) => {
  const [name, domain] = email.split("@");
  return `${name[0]}${name[1]}${name[2]}${name[3]}${new Array(name.length).join(
    "*"
  )}@${domain}`;
};
export const obscurePhone = (phone: string) => {
  const name = phone.split("");
  return `${name[0]}${name[1]}${name[2]}${new Array(name.length).join("*")}${
    name[name.length - 2]
  }${name[name.length - 1]}`;
};
