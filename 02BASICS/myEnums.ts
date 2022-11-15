// enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
/** 
 * There are three types of enums:
 * Numeric enum =Numeric enums are number-based enums i.e. they store string values as numbers.
 * String enum
 * Heterogeneous enum
*/

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book,
    Other
}
/**
 * The enum can be used as a function parameter or
 * return type
 */
function getMedia(mediaName: string): PrintMedia {
    if (mediaName === "TV3" || mediaName === "GTV") {
        return PrintMedia.Magazine
    }
    return PrintMedia.Other
}
let mediaType: PrintMedia = getMedia('TV3'); // returns Magazine

const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

const hcSeat  = SeatChoice.AISLE