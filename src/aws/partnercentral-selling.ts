const completionSpec: Fig.Spec = {
  name: "partnercentral-selling",
  description:
    "AWS Partner Central API for Selling  AWS Partner Central API for Selling Reference Guide  This Amazon Web Services (AWS) Partner Central API reference is designed to help AWS Partners integrate Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can automate interactions with AWS Partner Central, which helps to ensure effective engagements in joint business activities. The API provides standard AWS API functionality. Access it by either using API Actions or by using an AWS SDK that's tailored to your programming language or platform. For more information, see Getting Started with AWS and Tools to Build on AWS.  Features offered by AWS Partner Central API     Opportunity management: Manages coselling opportunities through API actions such as CreateOpportunity, UpdateOpportunity, ListOpportunities, GetOpportunity, and AssignOpportunity.    AWS referral management: Manages referrals shared by AWS using actions such as ListEngagementInvitations, GetEngagementInvitation, StartEngagementByAcceptingInvitation, and RejectEngagementInvitation.    Entity association: Associates related entities such as AWS Products, Partner Solutions, and AWS Marketplace Private Offers with opportunities using the actions AssociateOpportunity, and DisassociateOpportunity.    View AWS opportunity details: Retrieves real-time summaries of AWS opportunities using the GetAWSOpportunitySummary action.    List solutions: Provides list APIs for listing partner offers using ListSolutions.    Event subscription: Subscribe to real-time opportunity updates through AWS EventBridge by using actions such as Opportunity Created, Opportunity Updated, Engagement Invitation Accepted, Engagement Invitation Rejected, and Engagement Invitation Created",
  subcommands: [
    {
      name: "assign-opportunity",
      description:
        "Enables you to reassign an existing Opportunity to another user within your Partner Central account. The specified user receives the opportunity, and it appears on their Partner Central dashboard, allowing them to take necessary actions or proceed with the opportunity.   This is useful for distributing opportunities to the appropriate team members or departments within your organization, ensuring that each opportunity is handled by the right person. By default, the opportunity owner is the one who creates it. Currently, there's no API to enumerate the list of available users",
      options: [
        {
          name: "--assignee",
          description:
            "Specifies the user or team member responsible for managing the assigned opportunity. This field identifies the Assignee based on the partner's internal team structure. Ensure that the email address is associated with a registered user in your Partner Central account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity is assigned in. Use AWS to assign real opportunities in the Amazon Web Services catalog, and Sandbox for testing in secure, isolated environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Requires the Opportunity's unique identifier when you want to assign it to another user. Provide the correct identifier so the intended opportunity is reassigned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-opportunity",
      description:
        "Enables you to create a formal association between an Opportunity and various related entities, enriching the context and details of the opportunity for better collaboration and decision making. You can associate an opportunity with the following entity types:     Partner Solution: A software product or consulting practice created and delivered by Partners. Partner Solutions help customers address business challenges using Amazon Web Services services.     Amazon Web Services Products: Amazon Web Services offers many products and services that provide scalable, reliable, and cost-effective infrastructure solutions. For the latest list of Amazon Web Services products, see Amazon Web Services products.     Amazon Web Services Marketplace private offer: Allows Amazon Web Services Marketplace sellers to extend custom pricing and terms to individual Amazon Web Services customers. Sellers can negotiate custom prices, payment schedules, and end user license terms through private offers, enabling Amazon Web Services customers to acquire software solutions tailored to their specific needs. For more information, see Private offers in Amazon Web Services Marketplace.    To obtain identifiers for these entities, use the following methods:   Solution: Use the ListSolutions operation.    AWS Products: For the latest list of Amazon Web Services products, see Amazon Web Services products.     Amazon Web Services Marketplace private offer: Use the Using the Amazon Web Services Marketplace Catalog API to list entities. Specifically, use the ListEntities operation to retrieve a list of private offers. The request returns the details of available private offers. For more information, see ListEntities",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity association is made in. Use AWS to associate opportunities in the Amazon Web Services catalog, and Sandbox for testing in secure, isolated environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--opportunity-identifier",
          description:
            "Requires the Opportunity's unique identifier when you want to associate it with a related entity. Provide the correct identifier so the intended opportunity is updated with the association",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-entity-identifier",
          description:
            "Requires the related entity's unique identifier when you want to associate it with the  Opportunity. For Amazon Web Services Marketplace entities, provide the Amazon Resource Name (ARN). Use the  Amazon Web Services Marketplace API to obtain the ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-entity-type",
          description:
            "Specifies the entity type that you're associating with the  Opportunity. This helps to categorize and properly process the association",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-opportunity",
      description:
        "Creates an Opportunity record in Partner Central. Use this operation to create a potential business opportunity for submission to Amazon Web Services. Creating an opportunity sets Lifecycle.ReviewStatus to Pending Submission.   To submit an opportunity, follow these steps:    To create the opportunity, use CreateOpportunity.   To associate a solution with the opportunity, use AssociateOpportunity.   To submit the opportunity, use StartEngagementFromOpportunityTask.    After submission, you can't edit the opportunity until the review is complete. But opportunities in the Pending Submission state must have complete details. You can update the opportunity while it's in the Pending Submission state.   There's a set of mandatory fields to create opportunities, but consider providing optional fields to enrich the opportunity record",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity is created in. Use AWS to create opportunities in the Amazon Web Services catalog, and Sandbox for testing in secure, isolated environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            'Required to be unique, and should be unchanging, it can be randomly generated or a meaningful string.   Default: None   Best practice: To help ensure uniqueness and avoid conflicts, use a Universally Unique Identifier (UUID) as the ClientToken. You can use standard libraries from most programming languages to generate this. If you use the same client token, the API returns the following error: "Conflicting client token submitted for a new request body."',
          args: {
            name: "string",
          },
        },
        {
          name: "--customer",
          description:
            "Specifies customer details associated with the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--life-cycle",
          description:
            "An object that contains lifecycle details for the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--marketing",
          description:
            "This object contains marketing details and is optional for an opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--national-security",
          description:
            "Indicates whether the Opportunity pertains to a national security project. This field must be set to true only when the customer's industry is Government. Additional privacy and security measures apply during the review and management process for opportunities marked as NationalSecurity",
          args: {
            name: "string",
          },
        },
        {
          name: "--opportunity-team",
          description:
            "Represents the internal team handling the opportunity. Specify collaborating members of this opportunity who are within the partner's organization",
          args: {
            name: "list",
          },
        },
        {
          name: "--opportunity-type",
          description:
            "Specifies the opportunity type as a renewal, new, or expansion.   Opportunity types:     New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.     Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.     Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description:
            "Specifies the origin of the opportunity, indicating if it was sourced from Amazon Web Services or the partner. For all opportunities created with Catalog: AWS, this field must only be Partner Referral. However, when using Catalog: Sandbox, you can set this field to AWS Referral to simulate Amazon Web Services referral creation. This allows Amazon Web Services-originated flows testing in the sandbox catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-opportunity-identifier",
          description:
            "Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload to the partner.   This field allows partners to link an opportunity to their CRM, which helps to ensure seamless integration and accurate synchronization between the Partner Central API and the partner's internal systems",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-needs-from-aws",
          description:
            "Identifies the type of support the partner needs from Amazon Web Services.   Valid values:     Cosell\u2014Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.     Cosell\u2014Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.     Cosell\u2014Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.     Cosell\u2014Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).     Cosell\u2014Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.     Cosell\u2014Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.     Cosell\u2014Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).     Cosell\u2014Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.     Do Not Need Support from AWS Sales Rep: Indicates that a partner doesn't need support from an Amazon Web Services sales representative, and the partner solely manages the opportunity. It's possible to request coselling support on these opportunities at any stage during their lifecycles. This is also known as a for-visibility-only (FVO) opportunity",
          args: {
            name: "list",
          },
        },
        {
          name: "--project",
          description:
            "An object that contains project details for the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-revenue",
          description:
            "Specifies details of a customer's procurement terms. This is required only for partners in eligible programs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-opportunity",
      description:
        "Allows you to remove an existing association between an Opportunity and related entities, such as a Partner Solution, Amazon Web Services product, or an Amazon Web Services Marketplace offer. This operation is the counterpart to AssociateOpportunity, and it provides flexibility to manage associations as business needs change.   Use this operation to update the associations of an Opportunity due to changes in the related entities, or if an association was made in error. Ensuring accurate associations helps maintain clarity and accuracy to track and manage business opportunities. When you replace an entity, first attach the new entity and then disassociate the one to be removed, especially if it's the last remaining entity that's required",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity disassociation is made in. Use AWS to disassociate opportunities in the Amazon Web Services catalog, and Sandbox for testing in secure, isolated environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--opportunity-identifier",
          description:
            "The opportunity's unique identifier for when you want to disassociate it from related entities. This identifier helps to ensure that the correct opportunity is updated.  Validation: Ensure that the provided identifier corresponds to an existing opportunity in the Amazon Web Services system because incorrect identifiers result in an error and no changes are made",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-entity-identifier",
          description:
            "The related entity's identifier that you want to disassociate from the opportunity. Depending on the type of entity, this could be a simple identifier or an Amazon Resource Name (ARN) for entities managed through Amazon Web Services Marketplace.  For Amazon Web Services Marketplace entities, use the Amazon Web Services Marketplace API to obtain the necessary ARNs. For guidance on retrieving these ARNs, see  Amazon Web Services MarketplaceUsing the Amazon Web Services Marketplace Catalog API.  Validation: Ensure the identifier or ARN is valid and corresponds to an existing entity. An incorrect or invalid identifier results in an error",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-entity-type",
          description:
            "The type of the entity that you're disassociating from the opportunity. When you specify the entity type, it helps the system correctly process the disassociation request to ensure that the right connections are removed.  Examples of entity types include Partner Solution, Amazon Web Services product, and Amazon Web Services Marketplaceoffer. Ensure that the value matches one of the expected entity types.  Validation: Provide a valid entity type to help ensure successful disassociation. An invalid or incorrect entity type results in an error",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-aws-opportunity-summary",
      description:
        "Retrieves a summary of an AWS Opportunity. This summary includes high-level details about the opportunity sourced from AWS, such as lifecycle information, customer details, and involvement type. It is useful for tracking updates on the AWS opportunity corresponding to an opportunity in the partner's account",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog in which the AWS Opportunity is located. Accepted values include AWS for production opportunities or Sandbox for testing purposes. The catalog determines which environment the opportunity data is pulled from",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-opportunity-identifier",
          description:
            "The unique identifier for the related partner opportunity. Use this field to correlate an AWS opportunity with its corresponding partner opportunity",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-engagement-invitation",
      description:
        "Retrieves the details of an engagement invitation shared by AWS with a partner. The information includes aspects such as customer, project details, and lifecycle information. To connect an engagement invitation with an opportunity, match the invitation\u2019s Payload.Project.Title with opportunity Project.Title",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. The field accepts values from the predefined set: AWS for live operations or Sandbox for testing environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Specifies the unique identifier for the retrieved engagement invitation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-opportunity",
      description:
        "Fetches the Opportunity record from Partner Central by a given Identifier.   Use the ListOpportunities action or the event notification (from Amazon EventBridge) to obtain this identifier",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity is fetched from. Use AWS to retrieve opportunities in the Amazon Web Services catalog, and Sandbox to retrieve opportunities in a secure, isolated testing environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Read-only, system generated Opportunity unique identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-engagement-invitations",
      description:
        "Retrieves a list of engagement invitations sent to the partner. This allows partners to view all pending or past engagement invitations, helping them track opportunities shared by AWS",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog from which to list the engagement invitations. Use AWS for production invitations or Sandbox for testing environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of engagement invitations to return in the response. If more results are available, a pagination token will be provided",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to retrieve additional pages of results when the response to a previous request was truncated. Pass this token to continue listing invitations from where the previous call left off",
          args: {
            name: "string",
          },
        },
        {
          name: "--participant-type",
          description:
            "Specifies the type of participant for which to list engagement invitations. Identifies the role of the participant",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload-type",
          description:
            "Defines the type of payload associated with the engagement invitations to be listed. The attributes in this payload help decide on acceptance or rejection of the invitation",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description:
            "Specifies the sorting options for listing engagement invitations. Invitations can be sorted by fields such as InvitationDate or Status to help partners view results in their preferred order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-opportunities",
      description:
        "This request accepts a list of filters that retrieve opportunity subsets as well as sort options. This feature is available to partners from Partner Central using the ListOpportunities API action.  To synchronize your system with Amazon Web Services, only list the opportunities that were newly created or updated. We recommend you rely on events emitted by the service into your Amazon Web Services account\u2019s Amazon EventBridge default event bus, you can also use the ListOpportunities action.  We recommend the following approach:   Find the latest LastModifiedDate that you stored, and only use the values that came from Amazon Web Services. Don\u2019t use values generated by your system.    When you send a ListOpportunities request, submit the date in ISO 8601 format in the AfterLastModifiedDate filter.    Amazon Web Services only returns opportunities created or updated on or after that date and time. Use NextToken to iterate over all pages",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunities are listed in. Use AWS for listing real opportunities in the Amazon Web Services catalog, and Sandbox for testing in secure, isolated environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-company-name",
          description:
            "Filters the opportunities based on the customer's company name. This allows partners to search for opportunities associated with a specific customer by matching the provided company name string",
          args: {
            name: "list",
          },
        },
        {
          name: "--identifier",
          description:
            "Filters the opportunities based on the opportunity identifier. This allows partners to retrieve specific opportunities by providing their unique identifiers, ensuring precise results",
          args: {
            name: "list",
          },
        },
        {
          name: "--last-modified-date",
          description:
            "Filters the opportunities based on their last modified date. This filter helps retrieve opportunities that were updated after the specified date, allowing partners to track recent changes or updates",
          args: {
            name: "structure",
          },
        },
        {
          name: "--life-cycle-review-status",
          description:
            "Filters the opportunities based on their current lifecycle approval status. Use this filter to retrieve opportunities with statuses such as Pending Submission, In Review, Action Required, or Approved",
          args: {
            name: "list",
          },
        },
        {
          name: "--life-cycle-stage",
          description:
            "Filters the opportunities based on their lifecycle stage. This filter allows partners to retrieve opportunities at various stages in the sales cycle, such as Qualified, Technical Validation, Business Validation, or Closed Won",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of results to return in a single call. This limits the number of opportunities returned in the response to avoid providing too many results at once.   Default: 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description:
            "An object that specifies how the response is sorted. The default Sort.SortBy value is LastModifiedDate",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-solutions",
      description:
        "Retrieves a list of Partner Solutions that the partner registered on Partner Central. This API is used to generate a list of solutions that an end user selects from for association with an opportunity",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the solutions are listed in. Use AWS to list solutions in the Amazon Web Services catalog, and Sandbox to list solutions in a secure and isolated testing environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--category",
          description:
            "Filters the solutions based on the category to which they belong. This allows partners to search for solutions within specific categories, such as Software, Consulting, or Managed Services",
          args: {
            name: "list",
          },
        },
        {
          name: "--identifier",
          description:
            "Filters the solutions based on their unique identifier. Use this filter to retrieve specific solutions by providing the solution's identifier for accurate results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results.  Default: 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description:
            "Object that configures sorting done on the response. Default Sort.SortBy is Identifier",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description:
            "Filters solutions based on their status. This filter helps partners manage their solution portfolios effectively",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "reject-engagement-invitation",
      description:
        "This action rejects an EngagementInvitation that AWS shared. Rejecting an invitation indicates that the partner doesn't want to pursue the opportunity, and all related data will become inaccessible thereafter",
      options: [
        {
          name: "--catalog",
          description:
            "This is the catalog that's associated with the engagement invitation. Acceptable values are AWS or Sandbox, and these values determine the environment in which the opportunity is managed",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "This is the unique identifier of the rejected EngagementInvitation. Providing the correct identifier helps to ensure that the intended invitation is rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--rejection-reason",
          description:
            "This describes the reason for rejecting the engagement invitation, which helps AWS track usage patterns. Acceptable values include the following:    Customer problem unclear: The customer's problem isn't understood.    Next steps unclear: The next steps required to proceed aren't understood.    Unable to support: The partner is unable to provide support due to resource or capability constraints.    Duplicate of partner referral: The opportunity is a duplicate of an existing referral.    Other: Any reason not covered by other values",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-engagement-by-accepting-invitation-task",
      description:
        "This action starts the engagement by accepting an EngagementInvitation. The task is asynchronous and involves the following steps: accepting the invitation, creating an opportunity in the partner\u2019s account from the AWS opportunity, and copying details for tracking. When completed, an Opportunity Created event is generated, indicating that the opportunity has been successfully created in the partner's account",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog related to the task. Use AWS for production engagements and Sandbox for testing scenarios",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier provided by the client that helps to ensure the idempotency of the request. This can be a random or meaningful string but must be unique for each request",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Specifies the unique identifier of the EngagementInvitation to be accepted. Providing the correct identifier helps ensure that the correct engagement is processed",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-engagement-from-opportunity-task",
      description:
        "This action initiates the engagement process from an existing opportunity by accepting the engagement invitation and creating a corresponding opportunity in the partner\u2019s system. Similar to StartEngagementByAcceptingInvitationTask, this action is asynchronous and performs multiple steps before completion",
      options: [
        {
          name: "--aws-submission",
          description:
            "Indicates the level of AWS involvement in the opportunity. This field helps track AWS participation throughout the engagement, such as providing technical support, deal assistance, and sales support",
          args: {
            name: "structure",
          },
        },
        {
          name: "--catalog",
          description:
            "Specifies the catalog in which the engagement is tracked. Acceptable values include AWS for production and Sandbox for testing environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token provided by the client to help ensure the idempotency of the request. It helps prevent the same task from being performed multiple times",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the opportunity from which the engagement task is to be initiated. This helps ensure that the task is applied to the correct opportunity",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-opportunity",
      description:
        "Updates the Opportunity record identified by a given Identifier. This operation allows you to modify the details of an existing opportunity to reflect the latest information and progress. Use this action to keep the opportunity record up-to-date and accurate.   When you perform updates, include the entire payload with each request. If any field is omitted, the API assumes that the field is set to null. The best practice is to always perform a GetOpportunity to retrieve the latest values, then send the complete payload with the updated values to be changed",
      options: [
        {
          name: "--catalog",
          description:
            "Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity is updated in. Use AWS to update real opportunities in the production environment, and Sandbox for testing in secure, isolated environments. When you use the Sandbox catalog, it allows you to simulate and validate your interactions with Amazon Web Services services without affecting live data or operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer",
          description:
            "Specifies details of the customer associated with the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identifier",
          description:
            "Read-only, system generated Opportunity unique identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-modified-date",
          description: "DateTime when the opportunity was last modified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--life-cycle",
          description:
            "An object that contains lifecycle details for the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--marketing",
          description:
            "An object that contains marketing details for the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--national-security",
          description:
            "Specifies if the opportunity is associated with national security concerns. This flag is only applicable when the industry is Government. For national-security-related opportunities, validation and compliance rules may apply, impacting the opportunity's visibility and processing",
          args: {
            name: "string",
          },
        },
        {
          name: "--opportunity-type",
          description:
            "Specifies the opportunity type as a renewal, new, or expansion.   Opportunity types:     New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.     Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.     Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-opportunity-identifier",
          description:
            "Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-needs-from-aws",
          description:
            "Identifies the type of support the partner needs from Amazon Web Services.   Valid values:     Cosell\u2014Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.     Cosell\u2014Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.     Cosell\u2014Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.     Cosell\u2014Pricing Assistance: Connect with an AWS seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).     Cosell\u2014Technical Consultation: Connection with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.     Cosell\u2014Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.     Cosell\u2014Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).     Cosell\u2014Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs RFx support from Amazon Web Services.     Do Not Need Support from AWS Sales Rep: Indicates that a partner doesn't need support from an Amazon Web Services Sales representative. The opportunity is managed solely by the partner. It's possible to request coselling support on these opportunities at any stage during their lifecycle. Also known as, for-visibility-only (FVO) opportunity",
          args: {
            name: "list",
          },
        },
        {
          name: "--project",
          description:
            "An object that contains project details summary for the Opportunity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-revenue",
          description:
            "Specifies details of a customer's procurement terms. Required only for partners in eligible programs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};

export default completionSpec;