Live Example:  
http://info.officite.com/summer60/DM  


Every month the marketing department mails to a list of approximately 30,000 recipients who are affiliated with various healthcare associations and represent various areas of practice. Altogether, there are about 40 versions of a direct mail piece that is completed by in-house graphic designers. It is vital for marketing to track all versions of the direct mail piece so to attribute the appropriate stats for end-of-month reporting, which is used to optimize segmentation, targeting, and budgeting for months proceeding.  

All versions of a month's direct mail will have a URL with a specific subdomain that pertains to a recipient for a given association and area of practice. This is not only track leads for that specific version of the direct mail piece, but to also ensure that the landing page the recipient visits displays the appropriate content. It is not optimal to have approximately 40 versions of a landing page with small differences, so jQuery and JavScript is used to achieve the following:  


Markup :
    1. Display the proper logo  
    2. Tailor the copy for an association and area or practice  
    3. Alter the form success location to a campaign set up in Pardot and mapped to Salesforce for each specific direct mail version for that month   
    4. Display the approrptiate imagery  
    5. Display the appropriate downloadable content based on products available to specific areas of practice  


The URL example at the top is to view the generic page that can cover all healthcare practices.  
Below is a table of URL examples that will display the dynamic content based on association and area of practice. This is achieved with the query "?src=" followed by a "value". Redirects are made in Register.com to the various version of a URL, but each redirect - differentiated by subdomain - ensures the proper query value for "src" is appended to the URL redirect.  


|Association  |Area of Practice   |Redirect                                        |Vanity URL             |
|-------------|------------------ |------------------------------------------------|-----------------------|
|AGD          |Dental             |http://info.officite.com/summer60/DM?src=AGD    |AGD.Summer60.com       |
|AAD          |Dermatology        |http://info.officite.com/summer60/DM?src=AAD    |AAD.Summer60.com       |
|AAOHNS       |Otolaryngology     |http://info.officite.com/summer60/DM?src=AAOHNS |AAOHNS.Summer60.com    |
|AAP          |Pediatric          |http://info.officite.com/summer60/DM?src=AAP    |AAPed.Summer60.com     |
|ACFAS        |Podiatry           |http://info.officite.com/summer60/DM?src=ACFAS  |ACFAS.Summer60.com     |
|ASGE         |Gastro             |http://info.officite.com/summer60/DM?src=ASGE   |ASGE.Summer60.com      |
|AOA          |Osteopathic        |http://info.officite.com/summer60/DM?src=AOA    |AOA.Summer60.com       |