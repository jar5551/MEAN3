/**
 * MEANS
 * Api dla MEANS
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jarek.frydrych@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CurrentUserView } from '../model/currentUserView';
import { LoginParameters } from '../model/loginParameters';
import { UserNew } from '../model/userNew';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SecurityService {

    protected basePath = 'http://localhost/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Pobieranie danych zalogowanego użytkownika
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public currentUserQuery(observe?: 'body', reportProgress?: boolean): Observable<CurrentUserView>;
    public currentUserQuery(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CurrentUserView>>;
    public currentUserQuery(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CurrentUserView>>;
    public currentUserQuery(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<CurrentUserView>(`${this.basePath}/security/current`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Logowanie do aplikacji
     * 
     * @param content Dane logowania użytkownika
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginHandler(content: LoginParameters, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public loginHandler(content: LoginParameters, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public loginHandler(content: LoginParameters, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public loginHandler(content: LoginParameters, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (content === null || content === undefined) {
            throw new Error('Required parameter content was null or undefined when calling loginHandler.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/security/login`,
            content,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Wylogowanie z aplikacji
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public logoutHandler(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public logoutHandler(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public logoutHandler(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public logoutHandler(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/security/logout`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Tworzenie usera
     * 
     * @param content Dane usera
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userNewHandler(content: UserNew, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public userNewHandler(content: UserNew, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public userNewHandler(content: UserNew, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public userNewHandler(content: UserNew, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (content === null || content === undefined) {
            throw new Error('Required parameter content was null or undefined when calling userNewHandler.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/security/user`,
            content,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
