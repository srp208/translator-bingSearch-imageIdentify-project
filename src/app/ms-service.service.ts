import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsServiceService {

  constructor(private http: HttpClient) { }

  public computerVisionService(imageURL: string) {
    const API = 'https://image-recogination.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType';

    const header = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '55ff3d361da84f2a94b1b256926b4048'
      }
    );

    return this.http.post(API, { url: imageURL }, { headers: header })
  }

  public translateText(text: any) {
    const API = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=hi';

    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'f04ca198d2a5494e99fcb3128080e2b6',
      'Ocp-Apim-Subscription-Region': 'eastasia',
      'Content-Type': 'application/json',
    });

    return this.http.post(API, [{ Text: text }], { headers: headers });
  }


    public getBingSearchSuggestion(searchTeam: any){
      const API = 'https://api.bing.microsoft.com/v7.0/Suggestions?q=' + searchTeam;

      const head = new HttpHeaders({
        'Ocp-Apim-Subscription-Key': '87a77c9ec62d4e1a97e7dba4e14e0dc5',
      });
      return this.http.get(API ,{ headers: head });
    }
    
}
