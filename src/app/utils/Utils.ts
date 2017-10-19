export class Utils {

  static getParam ( data: JSON, paramName: string ) {
     if ( data.hasOwnProperty( paramName )) {
         return data[paramName];
     }
     return null;
  }

}
