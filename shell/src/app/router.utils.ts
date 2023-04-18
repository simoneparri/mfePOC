import { UrlMatcher, UrlSegment } from '@angular/router';

export function startsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        console.log("startsWith")
        if(url){
            const fullUrl = url.map(u => {
                console.log(u);
                return u.path;
            }).join('/');
            if (fullUrl.startsWith(prefix)) {
                return ({ consumed: url});
            }
        }
        return null;
    };
}
