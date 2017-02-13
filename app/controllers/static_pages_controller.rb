class StaticPagesController < ApplicationController

    def home
        @items = [
            {"id": 1, "name": "resume", "link": "#{url_for(action: "resume")}"}, 
            {"id": 2, "name": "twitter", "link": "https://twitter.com/pdepaulo"}, 
            {"id": 3, "name": "linkedin", "link": "https://www.linkedin.com/in/peterdepaulo"}, 
            {"id": 4, "name": "github", "link": "https://github.com/pndpo"},
            {"id": 5, "name": "blog", "link": "https://pndpo.svbtle.com"},
            {"id": 6, "name": "gun.io", "link": "https://gun.io/blog/how-to-hire-a-javascript-developer/"}
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