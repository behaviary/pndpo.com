class StaticPagesController < ApplicationController

    def home
        @items = [
            {"id": 1, "name": "resume", "icon": "fa fa-file-text medium-font", "link": "#{url_for(action: "resume")}"}, 
            {"id": 2, "name": "twitter", "icon": "fa fa-twitter medium-font", "link": "https://twitter.com/pdepaulo"}, 
            {"id": 3, "name": "linkedin", "icon": "fa fa-linkedin-square medium-font", "link": "https://www.linkedin.com/in/peterdepaulo"}, 
            {"id": 4, "name": "github", "icon": "fa fa-github medium-font", "link": "https://github.com/pndpo"},
            {"id": 5, "name": "blog", "icon": "fa fa-paragraph medium-font", "link": "https://pndpo.svbtle.com"},
            {"id": 6, "name": "agency", "icon": "fa fa-anchor medium-font", "link": "https://www.studiosunfish.com/"},
            {"id": 7, "name": "gun.io", "icon": "fa fa-hand-o-right medium-font", "link": "https://gun.io/blog/how-to-hire-a-javascript-developer/"}
        ]
    end

    def resume
      pdf_filename = "#{Rails.root}/public/resume.pdf"
      send_file(
        pdf_filename,
        :filename => "resume.pdf", 
        :disposition => 'inline', 
        :type => "application/pdf")
    end
end