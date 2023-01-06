<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/class">
        <html>
            <body>
                <h2>Student List XML and XSL data</h2>

                <table border="1">
                    <tr bgcolor="lightblue">
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>NickName</th>
                    </tr>
                    <xsl:for-each select="/student">
                        <tr>
                            <td><xsl:value-of select="fname"/></td>
                            <td><xsl:value-of select="lname"/></td>
                            <td><xsl:value-of select="nickname"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>

    </xsl:template>