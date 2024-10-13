/** register widget here, or from remote config */
export const widgets = async ()=>{
    /* optional: fetch definition from server */
    return 
    [
        {
        name: 'Content list', 
        template: 'dmeditor/content_list.html.twig',
        settings:[{name: 'Limit', identifier: 'limit', settingComponent: 'int'}],
        styles:[], 
        }
   ]
}