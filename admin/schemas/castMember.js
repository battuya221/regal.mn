export default {
  name: 'castMember',
  title: 'Cast Member',
  type: 'object',
  fields: [
    {
      name: 'characterName',
      title: 'Character Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Actor',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      name: 'externalCreditId',
      title: 'External Credit ID',
      type: 'string',
    },
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'category.name',
      media: 'category.image',
    },
  },
}
