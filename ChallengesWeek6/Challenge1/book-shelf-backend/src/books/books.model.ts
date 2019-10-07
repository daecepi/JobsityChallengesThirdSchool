/**
 * Interface for the books in the application
 */

export interface Book{
    title: string;
    description: string;
    authors: [];
    publishedDate: string;
    pageCount: number;
    imageLinks: [];
    city: string;
    type: string;
    lent: {}; //This property will have a user and a date when the lend started
}