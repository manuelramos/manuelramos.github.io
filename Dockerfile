FROM jekyll/jekyll:latest

RUN npm install postcss@latest tailwindcss@latest autoprefixer@latest cssnano@latest
RUN bundle install
