FROM jekyll/jekyll:pages

RUN gem install webrick
RUN gem install jekyll-sass-converter