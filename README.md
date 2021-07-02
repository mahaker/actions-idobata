# actions-idobata

This action post message to idobata as webhook.

## Usage

```yml
uses: mahaker/actions-idobata@v1.1.2
with:
  hookUrl: ${{ secrets.IdobataHookUrl }}
  message: | # multiple lines
    ### hello GitHub Actions!!
    pushed to ${{ github.repository }}
    by @${{ github.actor }}
  format: 'markdown' # default
```

## How to use

1. Setup idobata hook

At your idobata room,
ROOM SETTINGS > Hooks > New Hook > Custom Webhook

Copy `Endpoint URL`.

2. Set Endpoint URL to GitHub's secret

At your repository,
Settings > Secrets > Add a new Secrets

The name of secret, please to `IdobataHookUrl`.
The value of secret, must be idobata hook endpoint url.

## Inputs

### hookUrl

**Required** idobata hook url.

### message

**Required** message to idobata.

You can contains [Contexts and expression syntax for GitHub Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions)


### format

Message format.
You can choose between 'markdown' or 'html'. (default 'markdown')
