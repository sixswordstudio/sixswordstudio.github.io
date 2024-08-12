# My Kaizen-esque Tech Writing Process
Kaizen is a Japanese term that translates to "continuous improvement." It is both a philosophy and a methodology aimed at improving processes, products, and work environments incrementally and systematically. Originating in Japan after World War II, Kaizen became popular in manufacturing, particularly within Toyota’s production system, and has since been applied across various industries and disciplines, including business, healthcare, and even personal development.

## Defining the Product Development Roadmap
_In the context of the Kaizen technique, this initial step is about **continuous improvement** through strategic foresight, ensuring that the documentation evolves in line with the company’s long-term goals._

The first step in my approach is to define or understand how the documentation fits into the overall product development roadmap. This involves taking notes in meetings, reviewing OKRs or KPIs for the org and for the company as a whole. Getting this bird's-eye view of each year's quarter, and identifying the company or organization's goals and targets, helps me ensure that the documentation strategy (or tactics) align with those business objectives. Once I know the targets and how to measure success, I can proceed to focus on creating the value for the end-users and our colleagues in the development and support organizations.

## Tracing Down to the Micro Scale
_Emphasizes **iterative improvements** by breaking down large tasks into manageable components, allowing for continuous refinement at the granular level._

Once a macro-level understanding of the company’s and organization-wide goals is established, I translate these into mid-to-short-term team and individual deliverables that drive those goals forward. This might involve creating user-facing help documents to accompany new features, which could require several key tasks for full deployment. However, it can also be as granular as writing acceptance criteria bullet points in Jira for development requirements. Even something as specific as hard-coding a tooltip into the UI demands awareness and foresight regarding the user’s need for reusable content, especially given the complexity of new features.

When creating help manuals or article-style documents, I start by closely aligning with the developers on their release timeline. This involves scheduling recurring meetings with different development teams, accommodating their time zones, to fully understand the limitations and benefits of the feature being developed. These meetings are vital for gathering the detailed information needed to produce accurate and helpful documentation. Ideally, these meetings should be as unobtrusive as possible, integrating me—the technical writer—into existing meetings or product feature reviews, whether live, in-person, or asynchronously through recordings, at the moment the developers' series of incremental improvements coalesce into a deployable update. By staying in sync with the development team’s progress without disrupting their flow, I ensure that the user-manual documentation is delivered to the end-user simultaneously with the feature release. As the feature is refined post-launch, I update the documentation to reflect new changes and highlight the key user-centered steps to effectively adopt the new feature.

## Internal Dissemination and Documentation
_From a Kaizen perspective, this process of internal dissemination reflects the principle of **standardization**, where knowledge is shared and documented consistently to support continuous learning and improvement across teams._

After collecting detailed information from the development teams, but before the content is polished and formatted for delivery to the end-user, I tidy up my notes for internal dissemination. The send-list was opt-in, and included the executives, the sales teams, project managers, designers, developers, support staff, and QA teams. When I knew my audience, I could draw their attention in standardized ways to key updates like a Django setting or API endpoint deprecating, by ensuring they are continuously informed about the upcoming events, at the right time. 

Proper documentation during this phase involves taking screenshots in a clean development, test, or staging environment and creating short demonstration recordings to embed within the documentation as gifs and to save in a video library for the training team's Learning Management Software. These visual aids, as well as downloadable infographics, enhance the clarity and usability of the documentation, making it easier for users to follow along and help users with confidence. 

## Writing Steps to Success
_In line with Kaizen philosophy, this step focuses on the **user’s experience**, continually refining the documentation to make it more effective and user-friendly._

Reference docs have a different use case and audience as help docs. Help docs are there to give users a sequence of steps that will lead them to their own success, how to use our product to meet their need. This includes giving context on how and why to use the feature, ensuring that the documentation is not just a set of instructions or descriptions of buttons, and also explains the rationale and context for different use cases and processes. When they associate successful projects and getting paid faster with using our product, it leads to better sentiment, adoption, and user satisfaction. That's why help docs should be as comprehensive as necessary to communicate best practices and prerequisites to success.

## Ensuring Adequate SEO
_Kaizen principles encourage **optimizing every aspect** of the process, including making sure that the documentation is not just well-written but also easily accessible to those who need it._

Accessibility in documentation goes beyond simple convenience—it's a fundamental aspect of inclusivity and respect for all users, regardless of their abilities. Ensuring that documentation is accessible is not just about adhering to best practices; it is about upholding the principles of human rights and acknowledging the diverse ways people interact with information. By making documentation easily accessible, we accommodate individuals with varying needs and abilities, whether they are navigating cognitive, visual, auditory, or physical challenges. This commitment to accessibility reflects a broader respect for other ways of being and ensures that everyone has equitable access to information.

To maximize the discoverability of the documentation, I ensure that it includes adequate SEO elements such as keywords & tags. This strategic approach helps make the documentation searchable and accessible to users who are looking for specific information, including those who may rely on assistive technologies or need information presented in a particular way. By including the right keywords and phrases, the documentation is more likely to appear in relevant search results, thereby improving its visibility and utility. This process not only enhances usability but also aligns with the Kaizen philosophy of continuous improvement by ensuring that our documentation meets the needs of all users, fostering a more inclusive and equitable digital environment.

## Fact-Checking with SMEs
_Kaizen emphasizes the importance of **quality control** and continuous feedback loops, making SME reviews an integral part of maintaining high standards in documentation._

Before finalizing the documentation, it is submitted to Subject Matter Experts (SMEs) for fact-checking. This step is crucial to ensure the accuracy and reliability of the information. SMEs provide valuable insights and can verify that the documentation correctly reflects the functionality and use of the feature. This review process helps in identifying any errors or inconsistencies that need to be addressed before the documentation is published.

## Peer Review and Release
_The Kaizen approach values **collaboration and collective responsibility**, ensuring that peer reviews are part of a continuous improvement process that enhances the overall quality of the output._

When working in a team of technical writers, the last step before publishing is to get a peer review from other writers. This is to ensure the quality of the documentation and to fix any style or tone errors that a technical SME would not be responsible for checking.

This involves having at least one other person review the content for clarity, accuracy, completeness, and adherance to in-house style guides. Once the peer review is complete and any necessary revisions are made, the documentation is posted on the release date. Additionally, users are notified of the new release, and the in-app modal is updated to reflect the changes. This ensures that users are aware of the new features and can access the updated documentation easily.
