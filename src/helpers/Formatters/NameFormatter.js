export default class NameFormatter{
  static formatName(firstname, middlename, lastname){
    let name = '';

    if(!!firstname) name += `${firstname} `;
    if(!!middlename) name += `${middlename} `;
    if(!!lastname) name += `${lastname}`;

    return name.trim();
  }
}
