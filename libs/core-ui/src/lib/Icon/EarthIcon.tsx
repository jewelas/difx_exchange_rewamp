import { IconProps } from '.';

function Icon({ width = 19, height = 19 }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none">
            <path d="M19.025 17.7711C19.0297 17.7641 19.0367 17.757 19.0414 17.75C20.5766 15.9242 21.5 13.5711 21.5 11C21.5 8.42891 20.5766 6.07578 19.0438 4.25C19.0391 4.24297 19.032 4.23828 19.0273 4.23125C19.0016 4.20078 18.9781 4.17266 18.9523 4.14453C18.943 4.13281 18.9336 4.12344 18.9242 4.11172L18.8281 4.00156L18.8258 3.99922C18.7906 3.95938 18.7531 3.91953 18.718 3.87969L18.7156 3.87734C18.6406 3.79766 18.5656 3.71797 18.4883 3.64062L18.4859 3.63828L18.3734 3.52578L18.3664 3.51875C18.3312 3.48359 18.2961 3.45078 18.2609 3.41797C18.2492 3.40625 18.2375 3.39453 18.2234 3.38281C18.2 3.35938 18.1766 3.33828 18.1531 3.31719C18.1461 3.31016 18.1367 3.30312 18.1297 3.29375C16.2594 1.55937 13.7539 0.5 11 0.5C8.24609 0.5 5.74062 1.55937 3.86797 3.29375C3.86094 3.30078 3.85156 3.30781 3.84453 3.31719C3.82109 3.33828 3.79766 3.36172 3.77422 3.38516C3.7625 3.39688 3.75078 3.40859 3.73672 3.42031C3.70156 3.45313 3.66641 3.48828 3.63125 3.52109L3.62422 3.52812L3.51172 3.64062L3.50937 3.64297C3.43203 3.72031 3.35703 3.8 3.28203 3.87969L3.27969 3.88203C3.24219 3.92188 3.20703 3.96172 3.17188 4.00156L3.16953 4.00391C3.13672 4.03906 3.10391 4.07656 3.07344 4.11406C3.06406 4.12578 3.05469 4.13516 3.04531 4.14688C3.01953 4.175 2.99609 4.20547 2.97031 4.23359C2.96562 4.24063 2.95859 4.24531 2.95391 4.25234C1.42344 6.07578 0.5 8.42891 0.5 11C0.5 13.5711 1.42344 15.9242 2.95625 17.75C2.96094 17.757 2.96797 17.7641 2.97266 17.7711L3.04531 17.8578C3.05469 17.8695 3.06406 17.8789 3.07344 17.8906L3.16953 18.0008C3.16953 18.0031 3.17188 18.0031 3.17188 18.0055C3.20703 18.0453 3.24219 18.0852 3.27969 18.1227L3.28203 18.125C3.35703 18.2047 3.43203 18.2844 3.50703 18.3617L3.50937 18.3641C3.54687 18.4016 3.58203 18.4391 3.61953 18.4742L3.62656 18.4813C3.70391 18.5586 3.78359 18.6336 3.86328 18.7062C5.74062 20.4406 8.24609 21.5 11 21.5C13.7539 21.5 16.2594 20.4406 18.132 18.7062C18.2119 18.6331 18.29 18.558 18.3664 18.4813L18.3734 18.4742C18.4109 18.4367 18.4484 18.4016 18.4836 18.3641L18.4859 18.3617C18.5633 18.2844 18.6383 18.2047 18.7109 18.125L18.7133 18.1227C18.7484 18.0828 18.7859 18.0453 18.8211 18.0055C18.8211 18.0031 18.8234 18.0031 18.8234 18.0008C18.8562 17.9656 18.8891 17.9281 18.9195 17.8906C18.9289 17.8789 18.9383 17.8695 18.9477 17.8578C18.9742 17.8296 18.9999 17.8006 19.025 17.7711ZM19.1211 14.4289C18.7977 15.193 18.3711 15.9008 17.8508 16.543C17.2648 16.0365 16.6241 15.5971 15.9406 15.2328C16.2125 14.1336 16.3813 12.9266 16.4258 11.6562H19.7891C19.7188 12.6148 19.4937 13.5453 19.1211 14.4289ZM19.7891 10.3438H16.4258C16.3813 9.07344 16.2125 7.86641 15.9406 6.76719C16.6273 6.40156 17.2672 5.96094 17.8508 5.45703C18.9818 6.84916 19.6584 8.55485 19.7891 10.3438ZM14.4289 2.87891C15.3594 3.27266 16.2055 3.81641 16.9508 4.50078C16.5178 4.86944 16.0518 5.19739 15.5586 5.48047C15.1906 4.42578 14.7195 3.50938 14.1711 2.77578C14.2578 2.80859 14.3445 2.84375 14.4289 2.87891ZM12.3055 19.2992C12.0898 19.468 11.8742 19.5969 11.6562 19.6836V15.3359C12.5862 15.4008 13.5008 15.6079 14.368 15.95C14.1734 16.5266 13.9484 17.0586 13.6883 17.5391C13.2805 18.2984 12.8023 18.9055 12.3055 19.2992ZM13.6883 4.46094C13.9461 4.94375 14.1734 5.47578 14.368 6.05C13.5008 6.39209 12.5862 6.59918 11.6562 6.66406V2.31875C11.8719 2.40547 12.0898 2.53203 12.3055 2.70312C12.8023 3.09453 13.2805 3.70156 13.6883 4.46094ZM11.6562 14.0211V11.6562H15.1133C15.0758 12.6922 14.9469 13.6977 14.7313 14.6516L14.7242 14.6797C13.7406 14.3067 12.7063 14.0847 11.6562 14.0211ZM11.6562 10.3438V7.97891C12.7297 7.91328 13.7609 7.68594 14.7242 7.32031L14.7313 7.34844C14.9469 8.30234 15.0758 9.30547 15.1133 10.3438H11.6562ZM10.3438 11.6562V14.0211C9.27031 14.0867 8.23906 14.3141 7.27578 14.6797L7.26875 14.6516C7.05312 13.6977 6.92422 12.6945 6.88672 11.6562H10.3438ZM6.88672 10.3438C6.92422 9.30781 7.05312 8.30234 7.26875 7.34844L7.27578 7.32031C8.23906 7.68594 9.26797 7.91328 10.3438 7.97891V10.3438H6.88672ZM10.3438 15.3359V19.6813C10.1281 19.5945 9.91016 19.468 9.69453 19.2969C9.19766 18.9055 8.71719 18.2961 8.30938 17.5367C8.05156 17.0539 7.82422 16.5219 7.62969 15.9477C8.50156 15.6055 9.40859 15.4016 10.3438 15.3359ZM10.3438 6.66406C9.41377 6.59918 8.49924 6.39209 7.63203 6.05C7.82656 5.47344 8.05156 4.94141 8.31172 4.46094C8.71953 3.70156 9.19766 3.09219 9.69687 2.70078C9.9125 2.53203 10.1281 2.40313 10.3461 2.31641V6.66406H10.3438ZM7.57109 2.87891C7.65781 2.84375 7.74219 2.80859 7.82891 2.77578C7.28047 3.50938 6.80937 4.42578 6.44141 5.48047C5.94922 5.19922 5.48281 4.87109 5.04922 4.50078C5.79453 3.81641 6.64063 3.27266 7.57109 2.87891ZM2.87891 7.57109C3.20234 6.80703 3.62891 6.09922 4.14922 5.45703C4.73281 5.96094 5.37266 6.40156 6.05938 6.76719C5.7875 7.86641 5.61875 9.07344 5.57422 10.3438H2.21094C2.28125 9.38516 2.50625 8.45469 2.87891 7.57109ZM2.21094 11.6562H5.57422C5.61875 12.9266 5.7875 14.1336 6.05938 15.2328C5.37589 15.5971 4.73521 16.0365 4.14922 16.543C3.01819 15.1508 2.34164 13.4451 2.21094 11.6562ZM7.57109 19.1211C6.64063 18.7273 5.79453 18.1836 5.04922 17.4992C5.48281 17.1289 5.94922 16.8031 6.44141 16.5195C6.80937 17.5742 7.28047 18.4906 7.82891 19.2242C7.74219 19.1914 7.65547 19.1562 7.57109 19.1211ZM14.4289 19.1211C14.3422 19.1562 14.2578 19.1914 14.1711 19.2242C14.7195 18.4906 15.1906 17.5742 15.5586 16.5195C16.0508 16.8008 16.5172 17.1289 16.9508 17.4992C16.2096 18.1807 15.3565 18.7294 14.4289 19.1211Z" fill="#262626" />
        </svg>
    );
}

export default Icon;
