# actions-idobata

This action post message to idobata as webhook.

## Inputs

### hookUrl

**Required** idobata hook url.

TODO
1. setup webhook
1. set secrets

### message

**Required** message to idobata.

You can contains context and expression syntax.
[Contexts and expression syntax for GitHub Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions)


### format

Message format.
You can choose from 'markdown' and 'html'.(default 'markdown')

```yml
uses: mahaker/actions-idobata@v1
with:
  hookUrl: ${{ secrets.IdobataHookUrl }}
  message: 'hello GitHub Actions!!'
```
