# Netlify Forms
## Creating Forms Without a Backend


- Netlify has built-in form handling[^1]
- No need for Backend or API calls
- Build bots parse HTML on deploy time for form attributes
  + `netlify` or `data-netlify=“true”`
  + `name=“my-form”`
  + `method=“POST”`
- After the parse Netlify injects this into your HTML
  + `<input type="hidden" name="form-name" value=”my-form">`

### Features

- Netlify Forms has a spam filter
  + Honeypot lure bots so adding `netlify-honeypot=bot-field` pushes an alert
  + ReCAPTCHA can be added with `data-netlify-recaptcha="true"` 
- Netlify allows for Form Notifications on submission  
  + Email
  + Slack
  + Webhook
- Submissions can be exported to a CSV

### Caveats

- If the form is rendered via JS it can't be parsed by default 
  There are a few ways to work around this 
  + NPM Packages such as `react-netlify-forms`[^2]
  + Add a hidden form to your HTML and hidden input in the JS[^3]
- Netlify Forms submissions are based on the latest form configuration
  + Data is fetchable from a API for all configurations
- If the form changes the previous submissions is blanked out on the admin UI
  + This can be remedied by hiding fields in your HTML 
- With free Netlify Plan there are some limits per month
  + 100 submissions 
  + 10 KB file upload

### Examples

- [HTML](./html/)
- [Vanilla](./vanilla/)
- [React](./react/)
- [Svelte](./svelte/)
- [Vue](./vue/)
- [Angular](./angular/)


#### Footnotes

[^1]: [Netlify Form Documentation](https://docs.netlify.com/forms/setup/)
[^2]: [React Netlify Forms (NPM)](https://www.npmjs.com/package/react-netlify-forms)
[^3]: [Integrate Netlify Forms in JSX](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/)
