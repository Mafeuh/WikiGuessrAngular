export class GlobalMethods {
    static splitInput(sentence: string): string[] {
    if(!sentence) return [];
    return sentence.split(/([\p{L}\p{N}]+|\S)/gu).filter(function(item) {
        return item.length > 0;
    })
    }
}