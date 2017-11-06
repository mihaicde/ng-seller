export class Notification {
  message: string;
  type: string;
  image = null;
  color: string;
  dissmisable = false;

  constructor(message: string, type: string, image: string, color: string) {
    this.message = message;
    this.type = type;
    this.image = image;
    this.color = color;
    // this.setTitle(title);
    // this.setDescription(description);
    // this.setType(type);
    // this.setImage(image);
    // this.setDismissable(dissmisable);
  }

  // setTitle(title: string) {
  //   return this.setProperty(title);
  // }

  // setDescription(description: string) {
  //   return this.setProperty(description);
  // }

  // setType(type: string) {
  //   return this.setProperty(type);
  // }

  // setImage(image: string) {
  //   return this.setProperty(image);
  // }

  // setDismissable(dissmisable?: boolean) {
  //   return this.setProperty(dissmisable);
  // }

  // setProperty(property?: any) {
  //   if ((typeof property !== 'undefined') && property != null) {
  //     this[property] = property;
  //   }
  //   return this;
  // }
}
