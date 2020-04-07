/*Author*/
            function Movie(name,release,actor,producer){
                 this.name = name;
                 this.release = release;
                 this.actor = actor;
                 this.producer = producer;
            }
            var movie1=new Movie("Captain Marvel","21/01/2019","Brie Larson","Kevi Fiege");
            var movie2=new Movie("Parasite","10/02/2019","Cho Yeo-jeong","Bong Joon-ho");
            var movie3=new Movie("Little Women","2/03/2019","Saoirse Ronan","Amy Pascal");
            var movie4=new Movie("Knives out","5/03/2019","Ana Amas","Ram Bergman");
            var movie5=new Movie("Booksmart","26/03/2019","kaitlyn Dever","Kaite");
            var movie6=new Movie("1917","18/04/2019","George Mackay","NSP");
            var movie7=new Movie("Uncut Gems","05/06/2019","Adam Scandlar","Scott Rudin");
            var movie8=new Movie("Joker","9/7/2019","Joaquin Phoenix","Todd Phillips");
            var movie9=new Movie("Hustlers","23/9/2019"," Constance Wu","Jennifer Lopez");
            var movie10=new Movie("The Lighthouse","16/10/2019"," Robert Pattinson","Rodrigo Teixeira");
            movie_data=[];
            movie_data.push(movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10);

            for(i=0;i<movie_data.length;i++){
                var rows = "";
                rows = "<tr><td>"+movie_data[i]['name']+"</td><td>"+movie_data[i]['release']+"</td><td>"+movie_data[i]['actor']+"</td><td>"+movie_data[i]['producer']+"</td></tr>";
                var tr = document.createElement('tr');
                tr.innerHTML=rows;
                document.getElementById("movielist").appendChild(tr);
            }
            function search(){
               var inp = document.getElementById("sear").value;
               for(i=0;i<movie_data.length;i++){
                   if(inp == movie_data[i]['name'] || inp == movie_data[i]['actor']){
                        rows = "<tr><td>"+this.movie_data[i]['name']+"</td><td>"+movie_data[i]['release']+"</td><td>"+this.movie_data[i]['actor']+"</td><td>"+movie_data[i]['producer']+"</td><tr>";
                        var tr = document.createElement('tr');
                        tr.innerHTML=rows;
                        document.getElementById("nlist").appendChild(tr);
                    }
                }
            }
